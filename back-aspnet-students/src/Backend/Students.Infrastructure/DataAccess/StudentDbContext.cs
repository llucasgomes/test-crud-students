using Microsoft.EntityFrameworkCore;

namespace Students.Infrastructure.DataAccess;
public class StudentDbContext: DbContext
{
    public StudentDbContext(DbContextOptions options) : base(options)
    {

    }
                //tabela do banco de dados   ↓
    public DbSet<Domain.Entities.Student> Students { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.ApplyConfigurationsFromAssembly(typeof(StudentDbContext).Assembly);
    }
}

