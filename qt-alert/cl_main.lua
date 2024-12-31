---@diagnostic disable: missing-parameter

SendAnnouncment = function(data) 
    if not data then return end 

    SendNUIMessage({
        action = "start",
        position = data.position, 
        progressColor = data.progressColor,
        iconColor = data.iconColor,  
        backgroundColor = data.backgroundColor, 
        title = data.title,   
        text = data.text,   
    })

end

exports('Send', SendAnnouncment)

RegisterCommand("not", function()
    exports['qt-alert']:Send({
        position = "top-center", 
        progressColor = "white",
        iconColor = "white",  
        backgroundColor = "rgba(11, 12, 13, 0.8)", 
        title = "Quantum Roleplay",   
        text = "This is a test message",   
    })
end)