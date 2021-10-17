using EasyPark.Models;
using EasyPark.Repositories.Interfaces;
using EasyPark.Services.Interfaces;

namespace EasyPark.Services
{
    public class BaseService<T> : BaseIService<T> where T : Entity
    {
        private readonly BaseIRepository<T> _repository;

        public BaseService(BaseIRepository<T> repository) 
        {
            _repository = repository;
        }
    }
}
