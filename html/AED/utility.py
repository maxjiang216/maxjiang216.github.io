def get_state_abbr(string, state=False):
    '''Returns two-letter state abbreviation'''

    if not state: # no change
        return string
    d = {'alabama': 'AL', 'alaska': 'AK', 'arizona': 'AZ', 'arkansas': 'AR', 'california': 'CA', 'colorado': 'CO', 'connecticut': 'CT', 'districtofcolumbia': 'DC', 'delaware': 'DE', 'florida': 'FL', 'georgia': 'GA', 'hawaii': 'HI', 'idaho': 'ID', 'illinois': 'IL', 'indiana': 'IN', 'iowa': 'IA', 'kansas': 'KS', 'kentucky': 'KY', 'louisiana': 'LA', 'maine': 'ME', 'maryland': 'MD', 'massachusetts': 'MA', 'michigan': 'MI', 'minnesota': 'MN', 'mississippi': 'MS', 'missouri': 'MO', 'montana': 'MT', 'nebraska': 'NE', 'nevada': 'NV', 'newhampshire': 'NH', 'newjersey': 'NJ', 'newmexico': 'NM', 'newyork': 'NY', 'northcarolina': 'NC', 'northdakota': 'ND', 'ohio': 'OH', 'oklahoma': 'OK', 'oregon': 'OR', 'pennsylvania': 'PA', 'rhodeisland': 'RI', 'southcarolina': 'SC', 'southdakota': 'SD', 'tennessee': 'TN', 'texas': 'TX', 'utah': 'UT', 'vermont': 'VT', 'virginia': 'VA', 'washington': 'WA', 'westvirginia': 'WV', 'wisconsin': 'WI', 'wyoming': 'WY'}
    out = d.get(''.join(string.split()).lower())
    if out == None:
        return string
    return out

def get_party_lst(lst):
    out = []
    for i in lst:
        out.append(get_party_abbr(i))
    return out

def get_party_abbr(string):
    '''Returns proper name of party given abbreviation/variation'''

    abbrs = {
        "Democratic":{"dem","democrat","democratic","democraticparty"}
    }

    for abbr in abbrs:
        if ''.join(string.split()).lower() in abbrs[abbr]:
            return abbr
    return string # if not found

def recolor_svg_hex(file_name, color, recolor):
    '''Scales coordinates in SVG path object'''
    outfile = open(file_name+'_recolor.txt','w')
    for line in open(file_name+'.txt','r'):
        if "<path " not in line or " fill=\"#"+color+"\"" not in line:
            outfile.write(line)
            continue
        prefix = line[:line.find(" fill=\"#")+8]
        coord = line[line.find(" fill=\"#")+8:]
        suffix = coord[coord.find('"'):]
        coord = coord[:coord.find('"')]
        outfile.write(prefix+recolor+suffix)
    outfile.close()

def replace_map(html, map, n = 4):
    '''replace map in html with contents in map (svg)'''
    out = ""
    flag = False
    done = False
    for line in open(html+'.html','r'):
        if flag:
            if "</svg>" in line:
                flag = False
            if "<path " not in line:
                out += line
            elif not done:
                for part in open(map + ".txt", 'r'):
                    out += ' ' * n + part.strip() + '\n'
                done = True
        elif not flag:
            out += line
            if "<svg " in line:
                flag = True

    open(html+".html",'w').write(out)


recolor_svg_hex("mapchart",'d1dbdd','6b6e73')
replace_map("US_president_county","mapchart_recolor",8)

