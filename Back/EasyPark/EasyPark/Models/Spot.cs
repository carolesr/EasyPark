using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyPark.Models
{
    public class Spot
    {
        public double IdSensor { get; set; }
        public string Description { get; set; }
        public bool ForDisabled { get; set; }
        public bool ForElderly { get; set; }
        public bool Occupied { get; set; }
    }
}
