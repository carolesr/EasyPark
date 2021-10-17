using EasyPark.Models;
using EasyPark.Repositories.Interfaces;
using EasyPark.Services.Interfaces;

namespace EasyPark.Services
{
    public class UserService : BaseService<User>, IUserService
    {
        public UserService(IUserRepository repository) : base(repository) { }
    }
}
