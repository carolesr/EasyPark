using EasyPark.Models;
using EasyPark.Repositories.Interfaces;

namespace EasyPark.Repositories
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        public UserRepository(IDatabaseSettings settings) : base(settings, "User") { }
    }
}
