using EasyPark.Models.DTOs;
using EasyPark.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace EasyPark.Controllers
{
    [ApiController]
    [Route("user")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _service;

        public UserController(IUserService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("index")]
        public ActionResult Index()
        {
            return Ok("hello world");
        }

        [HttpGet]
        [Route("getAll")]
        public ActionResult GetAll()
        {
            return Ok(_service.GetAll());
        }

        [HttpPost]
        [Route("create")]
        public ActionResult Create(UserDTO user)
        {
            return Ok(_service.CreateUser(user));
        }
    }
}
