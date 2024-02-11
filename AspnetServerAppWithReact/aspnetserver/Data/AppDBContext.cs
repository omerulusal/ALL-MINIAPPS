using Microsoft.EntityFrameworkCore;
namespace aspnetserver.Data;

internal sealed class AppDBContext : DbContext
{
    public DbSet<Post> Posts { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder DbContextOptionsBuilder) => DbContextOptionsBuilder.UseSqlite("Data Source=./Data/AppDB.db");
    protected override void OnModelCreating(ModelBuilder ModelBuilder)
    {
        Post[] postToSeed = new Post[6];
        for (int i = 1; i <= 6; i++)
        {
            postToSeed[i - 1] = new Post
            {
                PostId = i,
                Title = $"Post {i}",
                Content = $"Content Body {i}",
                //rastgele veri girdim
            };
        }
        ModelBuilder.Entity<Post>().HasData(postToSeed);
    }
}

//Terminalde Girdigim Komutlar
/*
 * cd .\aspnetserver\ UYGULAMANIN BULUNDUGU DİZİN
 * dotnet add package Microsoft.EntityFrameworkCore.Design  //GEREKLİ PAKET
 * dotnet ef migrations add FirstMigration -o "Data/Migrations"  //OLUŞTURULACAK MIGRATION
 * dotnet ef database update  //MIGRATION GUNCELLEME
*/