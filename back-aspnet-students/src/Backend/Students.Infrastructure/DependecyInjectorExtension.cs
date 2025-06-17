using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Students.Domain.Entities;
using Students.Domain.Repositories;
using Students.Domain.Repositories.Student;
using Students.Infrastructure.DataAccess;
using Students.Infrastructure.DataAccess.Repositories;

namespace Students.Infrastructure;
public static class DependecyInjectorExtension
{
    public static void AddInfrastructure(this IServiceCollection services)
    {
        AddDbContext_Sqlite(services);
        AddRepositories(services);
    }

    private static void AddDbContext_Sqlite(IServiceCollection services)
    {
        //var connectionString = @"Data Source={Path.Combine(Directory.GetCurrentDirectory(), "src", "studentsDB.db")}";
        var connectionString = @"Data Source=C:\Users\lsgomes\Workspace\test-crud-students\back-aspnet-students\src\studentsDB.db";

        // Directory.GetCurrentDirectory() gets the directory where the app is being executed.  
        // Path.Combine(...) combines paths in the correct format for any operating system.  

        services.AddDbContext<StudentDbContext>(dbcontextOptions =>
        {
            dbcontextOptions.UseSqlite(connectionString);
        });
    }
    private static void AddRepositories(IServiceCollection services)
    {
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        services.AddScoped<IStudentReadOnlyRepository, StudentRepository>();
        services.AddScoped<IStudentWriteOnlyRepository, StudentRepository>();
    }
}
