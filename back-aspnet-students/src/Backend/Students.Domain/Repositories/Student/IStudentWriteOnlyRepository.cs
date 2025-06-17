namespace Students.Domain.Entities;
public interface IStudentWriteOnlyRepository
{
    public Task Add(Student student);
}
