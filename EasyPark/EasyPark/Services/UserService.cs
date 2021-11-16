using AutoMapper;
using EasyPark.Hubs;
using EasyPark.Models;
using EasyPark.Models.DTOs;
using EasyPark.Models.Entities;
using EasyPark.Repositories.Interfaces;
using EasyPark.Services.Interfaces;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;

namespace EasyPark.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _repository;
        private readonly IEstablishmentRepository _eRepository;
        private readonly IMapper _mapper;
        private readonly IHubContext<RobotHub> _hub;

        public UserService(IUserRepository repository, IEstablishmentRepository eRepository, IMapper mapper, IHubContext<RobotHub> hub)
        {
            _repository = repository;
            _eRepository = eRepository;
            _mapper = mapper;
            _hub = hub;
        }

        #region User related

        public Response GetAll()
        {
            List<UserDTO> result = _mapper.Map<List<UserDTO>>(_repository.Get());
            return new Response(result);
        }

        public Response GetUser(string email)
        {
            User user = _repository.Get().FirstOrDefault(u => u.Email == email);

            if (user == null)
                return new Response($"There is no account with email {email}.", false);

            UserDTO result = _mapper.Map<UserDTO>(user);
            return new Response(result);
        }

        public Response CreateUser(CreateUser newUser)
        {
            User user = _mapper.Map<User>(newUser);

            List<string> validations = ValidateUser(user);
            if (validations.Any())
                return new Response(validations, false);

            try
            {
                _repository.Insert(user);
                return new Response($"User {user.Name} created successfuly");
            }
            catch (Exception ex)
            {
                return new Response(ex.ToString(), false);
            }
        }

        public Response UpdateUser(UpdateUser updateUser)
        {
            if (InvalidEmail(updateUser.Email))
                return new Response($"There is no user registered with email {updateUser.Email}", false);

            User user = _mapper.Map<User>(updateUser);

            List<string> validations = ValidateUser(user, false);
            if (validations.Any())
                return new Response(validations, false);

            try
            {
                User userToUpdate = _repository.Get().FirstOrDefault(u => u.Email == user.Email);
                userToUpdate.Email = user.Email;
                userToUpdate.Name = user.Name;
                userToUpdate.Password = user.Password;
                userToUpdate.Phone = user.Phone;
                userToUpdate.CPF = user.CPF;

                _repository.Update(userToUpdate);
                return new Response($"User {user.Name} updated successfuly");
            }
            catch (Exception ex)
            {
                return new Response(ex.ToString(), false);
            }
        }

        public Response UpdateVehicles(UpdateVehicles updateVehicles)
        {
            if (InvalidEmail(updateVehicles.Email))
                return new Response($"There is no user registered with email {updateVehicles.Email}", false);

            List<Vehicle> vehicles = _mapper.Map<List<Vehicle>>(updateVehicles.Vehicles);

            List<string> validations = ValidateVehicles(vehicles);
            if (validations.Any())
                return new Response(validations, false);

            try
            {
                User userToUpdate = _repository.Get().FirstOrDefault(u => u.Email == updateVehicles.Email);
                userToUpdate.Vehicles = vehicles;

                _repository.Update(userToUpdate);
                return new Response($"{userToUpdate.Name}'s vehicles updated successfuly");
            }
            catch (Exception ex)
            {
                return new Response(ex.ToString(), false);
            }
        }

        public Response UpdateCards(UpdateCards updateCards)
        {
            if (InvalidEmail(updateCards.Email))
                return new Response($"There is no user registered with email {updateCards.Email}", false);

            List<Card> cards = _mapper.Map<List<Card>>(updateCards.Cards);

            List<string> validations = ValidateCards(cards);
            if (validations.Any())
                return new Response(validations, false);

            try
            {
                User userToUpdate = _repository.Get().FirstOrDefault(u => u.Email == updateCards.Email);
                userToUpdate.Cards = cards;

                _repository.Update(userToUpdate);
                return new Response($"{userToUpdate.Name}'s cards updated successfuly");
            }
            catch (Exception ex)
            {
                return new Response(ex.ToString(), false);
            }
        }

        public Response Login(Login login)
        {
            User user = _repository.Get().FirstOrDefault(u => u.Email == login.Email);

            if (user == null)
                return new Response($"There is no account with email {login.Email}.", false);

            if (user.Password != login.Password)
                return new Response("Password incorrect.", false);

            return new Response("User logged successfully.");
        }

        #endregion


        #region Parking Lot related

        public Response LinkUserToSpot(SpotPlate data)
        {
            try
            {
                User user = _repository.Get().FirstOrDefault(u => u.Vehicles != null && u.Vehicles.Any(v => v.Plate == data.Plate));
                if (user == null)
                    return new Response($"There is no user registered with the plate {data.Plate}.", false);

                Session currentSession = user.Sessions.FirstOrDefault(s => s.EndTime == null);
                if (currentSession == null)
                    return new Response($"No current session was found.", false);

                user.Sessions.FirstOrDefault(s => s.EndTime == null).Spot = data.Spot;

                _repository.Update(user);

                return new Response($"User {user.Email} parked in spot {data.Spot} with vehicle {data.Plate}.");
            }
            catch (Exception ex)
            {
                return new Response(ex.ToString(), false);
            }
        }

        public Response BeginSession(GateInfo data)
        {
            try
            {
                User user = _repository.Get().FirstOrDefault(u => u.Vehicles != null && u.Vehicles.Any(v => v.Plate == data.Plate));
                if (user == null)
                    return new Response($"There is no user registered with the plate {data.Plate}.", false);

                Establishment establishment = _eRepository.Get().FirstOrDefault(e => e.Id == data.Establishment);
                if (establishment == null)
                    return new Response($"There is no establishment with id {data.Establishment}.", false);

                Session currentSession = user.Sessions.FirstOrDefault(s => s.EndTime == null);
                if (currentSession != null)
                    return new Response($"Can't start another session while current one isn't finished.", false);

                Session newSession = new Session
                {
                    Establishment = establishment.Name,
                    StartTime = DateTime.Now
                };
                user.Sessions.Add(newSession);

                _repository.Update(user);

                return new Response($"User {user.Email} entered {data.Establishment} with vehicle {data.Plate} at {newSession.StartTime}.");
            }
            catch (Exception ex)
            {
                return new Response(ex.ToString(), false);
            }
        }

        public Response FinishSession(GateInfo data)
        {
            try
            {
                User user = _repository.Get().FirstOrDefault(u => u.Vehicles != null && u.Vehicles.Any(v => v.Plate == data.Plate));
                if (user == null)
                    return new Response($"There is no user registered with the plate {data.Plate}.", false);

                Establishment establishment = _eRepository.Get().FirstOrDefault(e => e.Id == data.Establishment);
                if (establishment == null)
                    return new Response($"There is no establishment with id {data.Establishment}.", false);

                Session currentSession = user.Sessions.FirstOrDefault(s => s.EndTime == null);
                if (currentSession == null)
                    return new Response($"There is no current session to be finished.", false);

                DateTime endTime = DateTime.Now;
                TimeSpan totalTime = endTime - currentSession.StartTime;
                double totalMinutes = Math.Round(totalTime.TotalMinutes);
                double value = establishment.Prices.FirstOrDefault(p => p.MinTime <= totalMinutes && p.MaxTime >= totalMinutes).Value;

                user.Sessions.FirstOrDefault(s => s.EndTime == null).Value = value;
                user.Sessions.FirstOrDefault(s => s.EndTime == null).Card = user.Cards.FirstOrDefault(c => c.Selected).Name;
                user.Sessions.FirstOrDefault(s => s.EndTime == null).EndTime = endTime;

                _repository.Update(user);

                return new Response($"User {user.Email} left {data.Establishment} with vehicle {data.Plate} at {DateTime.Now}.");
            }
            catch (Exception ex)
            {
                return new Response(ex.ToString(), false);
            }
        }

        #endregion


        #region Validations

        public List<string> ValidateUser(User user, bool isNewUser = true)
        {
            List<string> errors = new List<string>();

            if (string.IsNullOrEmpty(user.Email))
                errors.Add("The email field cannot be empty");

            if (string.IsNullOrEmpty(user.Password))
                errors.Add("The password field cannot be empty");

            if (string.IsNullOrEmpty(user.Name))
                errors.Add("The name field cannot be empty");

            if (string.IsNullOrEmpty(user.CPF))
                errors.Add("The cpf field cannot be empty");

            if (string.IsNullOrEmpty(user.Phone))
                errors.Add("The phone field cannot be empty");

            if (errors.Any()) return errors;

            if (isNewUser && EmailAlreadyExists(user.Email))
                errors.Add("There is already an account registered with this email");

            //if (EmailIsValid(user.Email))

            //if (PasswordIsValid(user.Password))

            //if (CPFIsValid(user.CPF))

            //if (PhoneIsValid(user.Phone))

            return errors;
        }

        public List<string> ValidateVehicles(List<Vehicle> vehicles)
        {
            List<string> errors = new List<string>();

            vehicles.ForEach(vehicle =>
            {
                if (string.IsNullOrEmpty(vehicle.Name))
                    errors.Add("The name field cannot be empty");

                if (string.IsNullOrEmpty(vehicle.Plate))
                    errors.Add("The plate field cannot be empty");
            });

            return errors;
        }

        public List<string> ValidateCards(List<Card> cards)
        {
            List<string> errors = new List<string>();

            cards.ForEach(cards =>
            {
                if (string.IsNullOrEmpty(cards.Name))
                    errors.Add("The name field cannot be empty");

                if (string.IsNullOrEmpty(cards.Number))
                    errors.Add("The number field cannot be empty");

                if (string.IsNullOrEmpty(cards.Expiration))
                    errors.Add("The expiration field cannot be empty");

                if (string.IsNullOrEmpty(cards.CVV))
                    errors.Add("The CVV field cannot be empty");
            });

            return errors;
        }

        public bool EmailAlreadyExists(string email)
        {
            return _repository.Get().Any(user => string.Equals(user.Email, email));
        }

        public bool InvalidEmail(string email)
        {
            return !_repository.Get().Any(user => string.Equals(user.Email, email));
        }

        #endregion

        public void TesteSignalR(string param)
        {
            _hub.Clients.All.SendAsync("Teste", param);
        }
    }
}
