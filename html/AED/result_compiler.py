def compile_president(path, filename="president"):
    '''Reads in presidentxxxx.txt file containing results of presidential elections
    From 1972 to 2020
    We wish to avoid elections before 1972 so have only Democrats and Republicans win states
    In future we may add previous elections for completeness
    but shift, trend, and bias data is not guaranteed to be meaningful and will focus on Democratic and
    Republican performance
    Before the establishment of the Republican party, we will represent the main opposition to the
    Democratic party as the Republican party in cases of trend, etc., for the primary reason that
    the Democratic party is older
    We may also choose to represent other parties as Independents where we feel it is appropriate'''

    for i in range(1972, 2024, 4):
        f = open("{0}{1}.txt".format(filename, i), 'r')
        colors = "" # mapping parties to colors
        results = "" # mapping states to results
        parties = []
        first = True
        for line in f:
            if first:
                for party in line.split('\t')[1:-1]:
                    parties.append(party.split['/'][0])