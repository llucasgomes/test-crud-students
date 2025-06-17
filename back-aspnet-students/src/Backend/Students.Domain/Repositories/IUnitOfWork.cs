namespace Students.Domain.Repositories;
public interface IUnitOfWork
{
    public  Task Commit();
}
