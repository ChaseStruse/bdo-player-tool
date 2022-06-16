using System.Reflection;
using System.Runtime.InteropServices;
using System;
using Microsoft.AspNetCore.Mvc;
using bdo_player_tool.Models;
namespace bdo_player_tool.Controllers;

[ApiController]
[Route("[controller]")]
public class FamilyMemberController : ControllerBase
{
    private readonly ILogger<FamilyMemberController> _logger;

    public FamilyMemberController(ILogger<FamilyMemberController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public FamilyMember Get()
    {
        var familyMember = new FamilyMember{
            Id = Guid.NewGuid(),
            FamilyId = Guid.NewGuid(),
            Name = "Test Name",
            Level = 15
        };

        return familyMember;
    }
}
