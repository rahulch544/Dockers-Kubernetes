Perl:
HASH concept examples# {var} means it derefernces it#  %hash =(); normal hash declartion# $hash = {}; Anonymous hash declartion


# {var} means it derefernces it

my $hash = {hi => {helloi=>1,he=>2}, hello => how};

print ${%$hash->{hi}}{he};


print " ";
print %{%$hash->{hi}}->{he};
print " ";
print %{${$hash}{hi}}->{he};
print " ";
print ${${$hash}{hi}}{he};
print " ";
print %$hash->{hello};
print " ";
print ${$hash}{hello};
print " ";
print "\n";
my %has = (hi => {helloi=>1,he=>2}, hello => how);

print $has{hi};
print " ";
print %has->{hi};
print " ";
print $has{hello};
print " ";
print %has->{hello};
print " ";
print ${%has->{hi}}{helloi};
print " ";
print %{%has->{hi}}->{helloi};
print " ";
print ${$has{hi}}{helloi};
print " ";
print %{$has{hi}}->{helloi};


//
   print "***** RCHAMANT0 *****";
    print Dumper @_;
    print "***** RCHAMANT1 *****";
    print "$leading_list \n";
     print "***** RCHAMANT2 *****";
    print "$trailing_list \n";
     print "***** RCHAMANT3 *****";
       print "$@leading_list \n";
        print "***** RCHAMANT4 *****";
    print "@$trailing_list \n";
     print "***** RCHAMANT5 *****";
    print Dumper @_;


Perl:eg: # 31637541﻿54646 31470586﻿56677
my $str = '3163ad75@41﻿56 ,+314gsg70586﻿';

s/find this/replace with this/global search

replaces everything  expect digit in string with nothing
#$str =~ s/[^0-9\s,]//g;

replaces everything special characters  in string with nothing

#$str =~ s/[^[:print:]]//g;
or 
#$str =~ s/[^[print:]]//g;

replaces everything in  string except alphabets and numerics
$str =~ s/[^\p{PosixAlnum},\s]//g;