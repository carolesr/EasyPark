using AutoMapper;
using EasyPark.Models;
using EasyPark.Models.DTOs;
using EasyPark.Models.Entities;
using EasyPark.Repositories.Interfaces;
using EasyPark.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;

namespace EasyPark.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _repository;
        private readonly IMapper _mapper;

        public UserService(IUserRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public Response GetAll()
        {
            List<UserDTO> result = _mapper.Map<List<UserDTO>>(_repository.Get());
            return new Response(result);
        }

        public Response CreateUser(UserDTO userDTO)
        {
            User user = _mapper.Map<User>(userDTO);

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


        #region Validations

        public List<string> ValidateUser(User user)
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

            if (EmailAlreadyExists(user.Email))
                errors.Add("There is already an account registered with this email");

            //if (EmailIsValid(user.Email))

            //if (PasswordIsValid(user.Password))

            //if (CPFIsValid(user.CPF))

            //if (PhoneIsValid(user.Phone))

            return errors;
        }

        public bool EmailAlreadyExists(string email)
        {
            return _repository.Get().Any(user => string.Equals(user.Email, email));
        }

        #endregion
    }
}
