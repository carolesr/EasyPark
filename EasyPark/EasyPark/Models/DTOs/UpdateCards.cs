using System.Collections.Generic;

namespace EasyPark.Models.DTOs
{
    public class UpdateCards
    {
        public string Email { get; set; }
        public List<CardDTO> Cards { get; set; }
    }
}
