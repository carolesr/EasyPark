namespace EasyPark.Models.DTOs
{
    public class CardDTO
    {
        public string Name { get; set; }

        public string Number { get; set; }

        public string Expiration { get; set; }

        public string CVV { get; set; }

        public bool Selected { get; set; }
    }
}
