using EasyPark.Models;
using EasyPark.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace EasyPark.Controllers
{
    public class UserController : BaseController<User>
    {
        public UserController(IUserService service) : base(service) { }
    }
}
