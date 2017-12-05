using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmartCom.BL.Models
{
    public interface IUserInfo
    {
        string Name { get; }
        ICollection<string> Roles { get; }
    }
}
