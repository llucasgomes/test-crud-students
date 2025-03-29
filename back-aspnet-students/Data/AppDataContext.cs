
using back_aspnet_students.models;
using Microsoft.EntityFrameworkCore;

namespace back_aspnet_students.Data;

public class AppDataContext : DbContext
{
    public AppDataContext(DbContextOptions<AppDataContext> options) : base(options) { }

    public DbSet<Student> Students { get; set; } = null!;
}
