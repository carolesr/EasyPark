using EasyPark.Models.Entities;
using EasyPark.Repositories.Interfaces;
using EasyPark.Services.Interfaces;

namespace EasyPark.Services
{
    public class EstablishmentService : IEstablishmentService
    {
        private readonly IEstablishmentRepository _repository;
        public EstablishmentService(IEstablishmentRepository repository)
        {
            _repository = repository;
        }
    }
}
