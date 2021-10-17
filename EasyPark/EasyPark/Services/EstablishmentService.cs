using EasyPark.Models;
using EasyPark.Repositories.Interfaces;
using EasyPark.Services.Interfaces;

namespace EasyPark.Services
{
    public class EstablishmentService : BaseService<Establishment>, IEstablishmentService
    {
        public EstablishmentService(IEstablishmentRepository repository) : base(repository) { }
    }
}
