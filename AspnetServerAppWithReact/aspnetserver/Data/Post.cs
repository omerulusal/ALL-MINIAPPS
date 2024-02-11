using System.ComponentModel.DataAnnotations;

namespace aspnetserver.Data;

internal sealed class Post
{
    [Key]
    public int PostId { get; set; }

    [Required]
    [MaxLength(100)]
    public string Title { get; set; } = string.Empty;


    [Required]
    [MaxLength(100000)]
    public string Content { get; set; } = string.Empty; // =string.Empty başlangıçta boş demektir.


}

//sealed muhurlu yani miras alınamayacagını belirtir.