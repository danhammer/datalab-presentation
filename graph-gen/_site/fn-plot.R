
x <- 1:100
y1 <- 1/x^(3/4)
y2 <- 1/(sqrt(x) + 5) + 0.2


png(file = "../../images/work-lines.png", width = 1000, height = 400)
par(bg = NA, bty = 'n')
plot(x, y, type = "l",
     lwd      = 5,
     col      = "white",
     col.axis = "white",
     col.lab  = "white",
     cex.axis = 1.5,
     cex.lab  = 1.3)
lines(x, y2, col = "white")
dev.off()
