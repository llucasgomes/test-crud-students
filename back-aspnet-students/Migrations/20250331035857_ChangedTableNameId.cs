using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back_aspnet_students.Migrations
{
    /// <inheritdoc />
    public partial class ChangedTableNameId : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Student",
                newName: "id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "id",
                table: "Student",
                newName: "Id");
        }
    }
}
