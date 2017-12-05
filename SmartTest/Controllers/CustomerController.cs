using SmartCom.BL;
using TestSmartCom.DAL;
using TestSmartCom.DTO;

namespace SmartTest.Controllers
{
    public class CustomerController : CrudController<Customer, CustomerModel>
    {
        public CustomerController(IUnitOfWork uow) : base(uow)
        {
        }


    }
}
