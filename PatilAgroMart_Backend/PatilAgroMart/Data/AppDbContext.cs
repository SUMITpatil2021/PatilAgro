using Microsoft.EntityFrameworkCore;
using PatilAgroMart.Models;
using System.Security.Cryptography.X509Certificates;

namespace PatilAgroMart.Data
{
    public class AppDbContext :DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) { }
            public DbSet<User> Users{ get;set; }
    }
}

