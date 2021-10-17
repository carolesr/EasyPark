using EasyPark.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyPark.Repositories
{
    public class DatabaseSettings : IDatabaseSettings
    {
        public string User { get; set; }
        public string Establishment { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
