using EasyPark.Models.DTOs;
using EasyPark.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace EasyPark.Controllers
{
    [ApiController]
    [Route("establishment")]
    public class EstablishmentController : ControllerBase
    {
        private readonly IEstablishmentService _service;

        public EstablishmentController(IEstablishmentService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("getAll")]
        public ActionResult GetAll()
        {
            return Ok(_service.GetAll());
        }

        [HttpGet]
        [Route("getEstablishment")]
        public ActionResult getEstablishment(string establishmentId)
        {
            return Ok(_service.GetEstablishment(establishmentId));
        }

        [HttpPost]
        [Route("setSpotStatus")]
        public ActionResult SetSpotStatus(UpdateSpotStatus spot)
        {
            return Ok(_service.SetSpotStatus(spot));
        }
    }
}
