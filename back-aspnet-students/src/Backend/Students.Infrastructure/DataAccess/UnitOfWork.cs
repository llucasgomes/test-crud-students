using Students.Domain.Repositories;

namespace Students.Infrastructure.DataAccess;
public class UnitOfWork : IUnitOfWork
{
    private readonly StudentDbContext _context;

    public UnitOfWork(StudentDbContext context) => _context = context;

    public async Task Commit() => await _context.SaveChangesAsync();
}
