using EasyPark.Models;
using EasyPark.Repositories.Interfaces;

namespace EasyPark.Repositories
{
    public class EstablishmentRepository : BaseRepository<Establishment>, IEstablishmentRepository
    {
        public EstablishmentRepository(IDatabaseSettings settings) : base(settings, "Establishment") { }
    }
}
