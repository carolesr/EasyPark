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

        [HttpGet]
        [Route("GetUser")]
        public ActionResult GetUser(string email)
        {
            return Ok(_service.GetUser(email));
        }

        [HttpPost]
        [Route("create")]
        public ActionResult Create(CreateUser user)
        {
            return Ok(_service.CreateUser(user));
        }

        [HttpPut]
        [Route("updateUser")]
        public ActionResult UpdateUser(UpdateUser user)
        {
            return Ok(_service.UpdateUser(user));
        }

        [HttpPut]
        [Route("updateVehicles")]
        public ActionResult UpdateVehicles(UpdateVehicles vehicles)
        {
            return Ok(_service.UpdateVehicles(vehicles));
        }

        [HttpPut]
        [Route("updateCards")]
        public ActionResult UpdateCards(UpdateCards cards)
        {
            return Ok(_service.UpdateCards(cards));
        }

        [HttpPost]
        [Route("login")]
        public ActionResult Login(Login login)
        {
            return Ok(_service.Login(login));
        }
    }
}
