using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyPark.Models
{
    public class Establishment : Entity
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public List<Price> Prices { get; set; }
        public List<Spot> Spots { get; set; }
    }
}
