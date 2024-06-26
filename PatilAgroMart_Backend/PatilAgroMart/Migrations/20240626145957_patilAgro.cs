using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PatilAgroMart.Migrations
{
    /// <inheritdoc />
    public partial class patilAgro : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Username",
                table: "Users",
                newName: "Mobileno");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Mobileno",
                table: "Users",
                newName: "Username");
        }
    }
}
