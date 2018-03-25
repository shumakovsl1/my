using SmartCom.BL;
using SmartCom.BL.Models;
using SmartCom.DAL;
using SmartCom.DAL.Interfaces;
using SmartTest.DTO;

namespace SmartTest.Controllers
{
    public class CustomerController : CrudController<Customer, CustomerModel>
    {
        public CustomerController(IUnitOfWork uow, IUserInfo userInfo) : base(uow, userInfo)
        {
        }


    }
}
