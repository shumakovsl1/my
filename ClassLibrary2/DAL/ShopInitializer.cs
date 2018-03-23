using System;
using System.Collections.Generic;

namespace SmartCom.DAL
{
    public class ShopInitializer : System.Data.Entity.DropCreateDatabaseAlways<ShopContext>
    {
        protected override void Seed(ShopContext context)
        {
            var products = new List<Item>
            {
                new Item{ Category="Sport", Name="Ball", Code="54", Price=32.3m},
                new Item{ Category="Auto", Name="Bearing", Code="51", Price=323.3m},
                new Item{ Category="Comp", Name="Laptop", Code="12", Price=32543.1m},
            };
            products.ForEach(p => context.Products.Add(p));
            context.SaveChanges();

            var orderitems = new List<OrderItem>
            {
                new OrderItem{ ItemId=Guid.NewGuid(), ItemPrice=32.3m, ItemsCount=2, OrderId=Guid.NewGuid()},
                 new OrderItem{ ItemId=Guid.NewGuid(), ItemPrice=323.3m, ItemsCount=3, OrderId=Guid.NewGuid()},
                  new OrderItem{ ItemId=Guid.NewGuid(), ItemPrice=32543.1m, ItemsCount=5, OrderId=Guid.NewGuid()}
            };
            orderitems.ForEach(o => context.OrdersItems.Add(o));
            context.SaveChanges();

            var order = new List<Order>
            {
                new Order{Status="Выполнен", OrderDate=DateTime.Parse("09-01-2005"), CustomerId=Guid.NewGuid(), OrderNumber=23, ShipmentDate=DateTime.Parse("11-01-2005")},
                 new Order{Status="Выполняется", OrderDate=DateTime.Parse("09-01-2017"), CustomerId=Guid.NewGuid(), OrderNumber=232, ShipmentDate=DateTime.Parse("12-01-2017")},
                  new Order{Status="Новый", OrderDate=DateTime.Parse("06-01-2017"), CustomerId=Guid.NewGuid(), OrderNumber=222, ShipmentDate=DateTime.Parse("08-01-2017")}
            };
            order.ForEach(o => context.Orders.Add(o));
            context.SaveChanges();

            var customer = new List<Customer>
            {
                new Customer{ Address="Moskow", Code="2507-1997", Discount=5, Name="Kolya"},
                new Customer{ Address="Sochi", Code="1207-2008", Discount=10, Name="Vasya"},
                new Customer{ Address="Piter", Code="0704-2015", Name="Petya"}
            };
            customer.ForEach(c => context.Customers.Add(c));
            context.SaveChanges();
        }
    }
}