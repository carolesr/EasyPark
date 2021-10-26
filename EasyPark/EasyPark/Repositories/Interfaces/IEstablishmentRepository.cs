using EasyPark.Models.Entities;
using System.Collections.Generic;

namespace EasyPark.Repositories.Interfaces
{
    public interface IEstablishmentRepository
    {
        public IEnumerable<Establishment> Get();
        public void Insert(Establishment entity);
        public void Update(Establishment entity);
        public void Delete(string id);
    }
}
