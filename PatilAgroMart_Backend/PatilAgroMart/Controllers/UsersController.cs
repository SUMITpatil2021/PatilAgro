using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PatilAgroMart.Data;
using PatilAgroMart.Models;

namespace PatilAgroMart.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;    
        public UsersController(AppDbContext appDbContext) { 
        
            _appDbContext = appDbContext;
        }

        [HttpPost]
        public async Task<IActionResult> AddUser(User user)
        {
            _appDbContext.Users.Add(user);
             await  _appDbContext.SaveChangesAsync();

            return Ok(user );
        }
    }
}
