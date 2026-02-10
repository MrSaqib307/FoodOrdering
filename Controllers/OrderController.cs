using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

[ApiController]
[Route("api/orders")]
public class OrdersController : ControllerBase
{
    private readonly string filePath = "Data/orders.json";

    [HttpPost]
    public IActionResult SaveOrder([FromBody] object order)
    {
        var existing = System.IO.File.ReadAllText(filePath);
        var orders = JsonSerializer.Deserialize<List<object>>(existing);
        orders.Add(order);
        System.IO.File.WriteAllText(filePath, JsonSerializer.Serialize(orders, new JsonSerializerOptions { WriteIndented = true }));
        return Ok();
    }
}
