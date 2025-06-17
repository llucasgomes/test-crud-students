namespace Students.Domain.Repositories.Student;
public interface IStudentReadOnlyRepository
{
    public Task<bool> ExistStudentWithEmail(string email);
}
