using System.Data.Entity;

namespace SmartCom.DAL
{
    public class ShopContext : DbContext
    {
        public ShopContext() : base(nameOrConnectionString: "ShopContext")
        {
            Database.SetInitializer(strategy: new ShopInitializer());
        }

        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<OrderItem> OrdersItems { get; set; }
        public virtual DbSet<Item> Products { get; set; }
    }
}