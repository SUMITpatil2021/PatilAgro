using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PatilAgroMart.Data;
using PatilAgroMart.DTO;
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


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
        {
            var user = await _appDbContext.Users
                .Where(u => u.Username == loginModel.Username && u.Password == loginModel.Password)
                .FirstOrDefaultAsync();

            if (user == null)
            {
                return Unauthorized("Invalid credentials.");
            }

            return Ok(new { Message = "Login successful", User = user });
        }

    }
}
