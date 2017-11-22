import yaml

organisms = []

class Board(object):
	pass

class God(object):

	def __init__(self, name):
		self.energy = {}

	def initilaise_zero_energy(organism_name):
		self.energy[organism_name] = 0

	def add_energy(organism_name, amount):
		self.energy[organism_name] += amount

class Organism(object):
	
	def __init__(self, x, y, name):
	    self.xs = [x]
	    self.ys = [y]
	    self.name = name

	    self.attack = 0
	    self.defence = 0
	    self.reproduction = 1
	    self.energy_score = 1
	    self.mobility = 0
	    self.intelligence = 0

	    self.energy_units = 1
	    self.chars = []

	def Move(self, dx, dy):
		self.xs = [x + dx for x in self.xs]
		self.ys = [y + dy for y in self.ys]

	def Reproduce(self, new_x, new_y):
		self.xs.append(new_x)
		self.ys.append(new_y)

def is_valid_starting_square(x, y):
	if x > 100:
		print("x co-ord is too large (bigger than 100). Try again")
		return False
	elif x < 0:
		print("x co-ord is too small (less than 0). Try again")
		return False
	elif y > 100:
		print("x co-ord is too large (bigger than 100). Try again")
		return False
	elif y < 0:
		print("x co-ord is too small (less than 0). Try again")
		return False
	else:
		return True

valid = False

while not valid:
	try:
		number_players = int(raw_input("How many organisms are there?"))
		if number_players < 2:
			print("Too few players! More than one needed")
		elif number_players > 6:
			print("Too many players! Maximum of six")
		else:
			valid = True
	except ValueError, e:
		print("%s is not a valid integer." % e.args[0].split(": ")[1])

for i in range(number_players):
	names = []
	name = raw_input("Player " + str(i+1) + ", what is your organism's name?")
	valid = False
	while not valid:
		try:
			print("Where do you want to start?")
			x = int(raw_input("x co-ord = "))
			y = int(raw_input("y co-ord = "))
			if is_valid_starting_square(x, y):
				pass
			else:
				organisms.append(Organism(x ,y, name))
				valid = True
		except ValueError, e:
			print("%s is not a valid integer." % e.args[0].split(": ")[1])
		
print(organisms)
print(organisms[0].name)
print(organisms[0].xs, organisms[0].ys)

game_ended = False


# while not game_ended:

if __name__ == '__main__':
    main()
