
x <- 1:100
y1 <- 1/x^(3/4)
y2 <- 1/(sqrt(x) + 5) + 0.2


png(file = "../images/work-lines.png", width = 800, height = 600)
par(bg = NA, bty = 'n')
plot(x, y1, type = "l",
     xlab     = "scale",
     ylab     = "effort",
     lwd      = 5,
     col      = "white",
     col.axis = "white",
     col.lab  = "#33CCFF",
     cex.axis = 1.3,
     cex.lab  = 1.5)
lines(x, y2, lwd = 3, col = "white")
text(13, 0.8, "Big data work", col = "#33CCFF", cex = 1.5)
text(75, 0.35, "Conventional analysis", col = "#33CCFF", cex = 1.5)
dev.off()
