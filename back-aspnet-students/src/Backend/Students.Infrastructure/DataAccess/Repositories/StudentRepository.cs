using Microsoft.EntityFrameworkCore;
using Students.Domain.Entities;
using Students.Domain.Repositories.Student;

namespace Students.Infrastructure.DataAccess.Repositories;
public class StudentRepository: IStudentWriteOnlyRepository, IStudentReadOnlyRepository
{
    private readonly StudentDbContext _context;

    public StudentRepository(StudentDbContext context) => _context = context;


    public async Task Add(Student student) => await _context.Students.AddAsync(student);

    public async Task<bool> ExistStudentWithEmail(string email) => await _context.Students
        .AnyAsync(student => student.Email == email);


}
