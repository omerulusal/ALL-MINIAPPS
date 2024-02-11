using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Data;
internal static class PostRepository
{
    internal async static Task<List<Post>> GetPostsAsync()
    {
        using (var db = new AppDBContext())
        {
            return await db.Posts.ToListAsync();
        }
    }
    internal async static Task<Post?> GetPostByIdAsync(int id)
    {
        using (var db = new AppDBContext())
        {
            return await db.Posts.FirstOrDefaultAsync(p => p.PostId == id);
        }
    }
    internal async static Task<bool> CreatePostAsync(Post olustur)
    {
        using (var db = new AppDBContext())
        {
            try
            {
                await db.Posts.AddAsync(olustur);
                return await db.SaveChangesAsync() >= 1;
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }

    internal async static Task<bool> UpdatePostAsync(Post guncel)
    {
        using (var db = new AppDBContext())
        {
            try
            {
                db.Posts.Update(guncel);
                return await db.SaveChangesAsync() >= 1;
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }


    internal async static Task<bool> SilPostAsync(int sil)
    {
        using (var db = new AppDBContext())
        {
            try
            {
                Post postToDelete = await GetPostByIdAsync(sil);
                db.Posts.Remove(postToDelete);
                return await db.SaveChangesAsync() >= 1;
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}
