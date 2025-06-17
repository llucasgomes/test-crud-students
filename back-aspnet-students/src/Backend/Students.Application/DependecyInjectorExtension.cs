using Microsoft.Extensions.DependencyInjection;
using Students.Application.Services.AutoMapper;
using Students.Application.Usecase.Student.Register;

namespace Students.Application;
public static class DependecyInjectorExtension
{
    public static void AddApplication(this IServiceCollection services)
    {
        AddStudentCases(services);
        AddAutoMapper(services);
    }

    private static void AddStudentCases(this IServiceCollection services)
    {
        services.AddScoped<IRegisterStudentUseCase , RegisterStudentUseCase>();
    }

    private static void AddAutoMapper(this IServiceCollection services)
    {
        services.AddScoped(provider => new AutoMapper.MapperConfiguration(opt =>
        {
            opt.AddProfile<AutoMapping>();
        }).CreateMapper());
    }
}
