---@diagnostic disable: missing-parameter

--- Sends an announcement to the NUI interface.
---@param data table A table containing the announcement data.
---@field position string The position of the announcement on the screen (e.g., "top-center").
---@field progressColor string The color of the progress bar (e.g., "white").
---@field iconColor string The color of the icon (e.g., "white").
---@field backgroundColor string The background color of the announcement box (e.g., "rgba(11, 12, 13, 0.8)").
---@field title string The title of the announcement (e.g., "Quantum Roleplay").
---@field text string The text content of the announcement (e.g., "This is a test message").


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
