using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyPark.Repositories.Interfaces
{
    public interface IDatabaseSettings
    {
        string User { get; set; }
        string Establishment { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
