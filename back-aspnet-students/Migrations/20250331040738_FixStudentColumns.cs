using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back_aspnet_students.Migrations
{
    /// <inheritdoc />
    public partial class FixStudentColumns : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UpdatedAt",
                table: "Student",
                newName: "updatedAt");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Student",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Student",
                newName: "email");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "Student",
                newName: "createdAt");

            migrationBuilder.RenameColumn(
                name: "Course",
                table: "Student",
                newName: "course");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "updatedAt",
                table: "Student",
                newName: "UpdatedAt");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "Student",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "email",
                table: "Student",
                newName: "Email");

            migrationBuilder.RenameColumn(
                name: "createdAt",
                table: "Student",
                newName: "CreatedAt");

            migrationBuilder.RenameColumn(
                name: "course",
                table: "Student",
                newName: "Course");
        }
    }
}
