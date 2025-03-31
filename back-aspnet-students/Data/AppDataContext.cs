using back_aspnet_students.Models;
using Microsoft.EntityFrameworkCore;

namespace back_aspnet_students.Data;

public class AppDataContext : DbContext
{
    public AppDataContext(DbContextOptions<AppDataContext> options): base(options){}
    public DbSet<Student> Student {get;set;} = null!;
    
}
