using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;



namespace TestSmartCom.DAL
{
    public class ShopContext : DbContext
    {
        public ShopContext() : base("ShopContext")
        {
            Database.SetInitializer(new ShopInitializer());
        }

        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<OrderItem> OrdersItems { get; set; }
        public virtual DbSet<Item> Products { get; set; }

    }
}