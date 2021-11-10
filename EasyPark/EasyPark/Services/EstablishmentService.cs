using AutoMapper;
using EasyPark.Hubs.Interfaces;
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
    public class EstablishmentService : IEstablishmentService
    {
        private readonly IEstablishmentRepository _repository;
        private readonly IMapper _mapper;
        private readonly IRobotHub _hub;
        public EstablishmentService(IEstablishmentRepository repository, IMapper mapper, IRobotHub hub)
        {
            _repository = repository;
            _mapper = mapper;
            _hub = hub;
        }

        public Response GetAll()
        {
            List<EstablishmentDTO> result = _mapper.Map<List<EstablishmentDTO>>(_repository.Get());
            return new Response(result);
        }

        public Response GetEstablishment(string establishmentId)
        {
            Establishment establishment = _repository.Get().FirstOrDefault(u => u.Id == establishmentId);

            if (establishment == null)
                return new Response($"There is no account with id {establishmentId}.", false);

            EstablishmentDTO result = _mapper.Map<EstablishmentDTO>(establishment);
            return new Response(result);
        }

        public Response SetSpotStatus(UpdateSpotStatus spot)
        {
            try
            {
                Establishment establishment = _repository.Get().FirstOrDefault(e => e.Id == spot.EstablishmentId);
                establishment.Spots.FirstOrDefault(s => s.Description == spot.SpotId).Occupied = spot.Occupied;

                _repository.Update(establishment);

                if (spot.Occupied)
                    _hub.SendSpot(spot.SpotId);

                return new Response($"Spot {spot.SpotId} occupied successfully");
            }
            catch (Exception ex)
            {
                return new Response(ex.ToString(), false);
            }
        }
    }
}
